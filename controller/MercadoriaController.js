const Mercadoria = require('../models/Mercadoria');

exports.create = async (req, res) => {
  try {
    const novaMercadoria = await Mercadoria.create(req.body);
    res.status(201).json(novaMercadoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const mercadorias = await Mercadoria.find();
    res.json(mercadorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const mercadoria = await Mercadoria.findById(req.params.id);
    if (!mercadoria) {
      return res.status(404).json({ message: "Mercadoria não encontrada." });
    }
    res.json(mercadoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const mercadoria = await Mercadoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mercadoria) {
      return res.status(404).json({ message: "Mercadoria não encontrada." });
    }
    res.json(mercadoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const mercadoria = await Mercadoria.findByIdAndDelete(req.params.id);
    if (!mercadoria) {
      return res.status(404).json({ message: "Mercadoria não encontrada." });
    }
    res.json({ message: "Mercadoria deletada com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};