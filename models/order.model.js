const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    productId: [
      {
        ref: "product",
        type: mongoose.Schema.Types.ObjectId,
        require: true,
      },
    ],
    trackingStatus: {
      type: String,
      enum: ["complete", "pending", "on the way"],
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    addGift: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Order", orderSchema);
