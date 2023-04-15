const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { userSubscriptionEnum } = require('../../constants');

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email is in use..'],
      trim: true,
      lowercase: true,
    },
    subscription: {
      type: String,
      enum: Object.values(userSubscriptionEnum), // ['starter', 'pro', 'business'],
      default: userSubscriptionEnum.STARTER,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.avatarURL = gravatar.url(this.email, {
      s: '200',
      d: 'retro',
      protocol: 'https',
    });
  }

  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = (candidate, hash) =>
  bcrypt.compare(candidate, hash);

const User = mongoose.model('User', userSchema);

module.exports = { User };
