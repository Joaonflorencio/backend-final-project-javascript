const mongoose = require('mongoose');

const MercadoriaSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  quantidadeEmEstoque: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Mercadoria', MercadoriaSchema);