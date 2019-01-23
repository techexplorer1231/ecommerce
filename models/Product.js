const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    includes_tax: {
      type: Boolean
    }
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: 'product'
    },
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    manage_stock: {
      type: Boolean,
      required: true
    },
    price: [priceSchema],
    status: {
      type: String,
      default: 'draft',
      enum: ['draft', 'live']
    },
    commodity_type: {
      type: String,
      default: 'physical',
      enum: ['physical', 'digital']
    }
  },
  { timestamps: true }
);

/**
 * Statics
 */
productSchema.statics = {
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
