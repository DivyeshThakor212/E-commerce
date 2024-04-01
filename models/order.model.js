const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    product_id: [
      {
        ref: "product",
        type: mongoose.Schema.Types.ObjectId,
        require: true,
      },
    ],

    tracking_status: {
      type: String,
      enum: ["complete", "pending", "on the way"],
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    add_gift: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
