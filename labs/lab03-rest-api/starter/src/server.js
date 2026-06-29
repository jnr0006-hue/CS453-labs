import express from "express";

export function createApp() {
  const app = express();

  app.use(express.json());

  // Starter data. This data is stored in memory and will reset when the
  // server restarts.
  let nextId = 3;
  const items = [
    { id: 1, name: "keyboard", quantity: 10 },
    { id: 2, name: "mouse", quantity: 5 }
  ];

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/items", (req, res) => {
    res.json(items);
  });

  app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((i) => i.id === id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  });

  app.post("/items", (req, res) => {
    const item = { id: nextId, name: req.body.name, quantity: req.body.quantity };
    if (item.quantity < 0) {
      return res.status(400).json({ error: "Items cannot be negative quantity" });
    }
    if (item.name === "") {
      return res.status(400).json({ error: "Names cannot be empty" });
    }
    nextId++;
    items.push(item);
    res.status(201).json(item);
  });

  app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((i) => i.id === id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    if (item.quantity < 0) {
      return res.status(400).json({ error: "Items cannot be negative quantity" });
    }
    if (item.name === "") {
      return res.status(400).json({ error: "Names cannot be empty" });
    }
    item.name = req.body.name || item.name;
    item.quantity = req.body.quantity || item.quantity;
    res.json(item);
  });

  app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((i) => i.id === id);
    if (item === -1) {
      return res.status(404).json({ error: "Item not found" });
    }
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    items.splice(item, 1);
    res.status(204).send();
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  return app;
}

const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;

if (isMainModule) {
  const PORT = process.env.PORT || 3000;
  const app = createApp();

  app.listen(PORT, () => {
    console.log(`Lab 3 REST API listening on port ${PORT}`);
  });
}
