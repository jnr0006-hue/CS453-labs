import { describe, expect, test } from "vitest";
import request from "supertest";
import { createApp } from "../src/server.js";

describe("Lab 3 starter", () => {
  test("GET /health returns status ok", async () => {
    const app = createApp();

    const response = await request(app)
        .get("/health")
        .expect(200);

    expect(response.body).toEqual({ status: "ok" });
  });

  test("GET /items returns all items", async () => {
    const app = createApp();

    const response = await request(app)
      .get("/items")
      .expect(200);

    expect(response.body).toEqual([
      { id: 1, name: "keyboard", quantity: 10 },
      { id: 2, name: "mouse", quantity: 5 }
    ]);
  });

  test("GET /items/1 returns specific id item", async () => {
    const app = createApp();

    const response = await request(app)
      .get("/items/1")
      .expect(200);

    expect(response.body).toEqual({ id: 1, name: "keyboard", quantity: 10 });
  });

  test("POST /items creates a new item", async () => {
    const app = createApp();

    const response = await request(app)
      .post("/items")
      .send({ name: "monitor", quantity: 7 })
      .expect(201);

    expect(response.body).toEqual({
      id: 3,
      name: "monitor",
      quantity: 7
    });
  });

  test("POST /items rejects invalid name", async () => {
    const app = createApp();

    const response = await request(app)
      .post("/items")
      .send({ name: "", quantity: 1 })
      .expect(400);

    expect(response.body).toEqual({
      error: "Names cannot be empty"
    });
  });

  test("POST /items rejects invalid quantity", async () => {
    const app = createApp();

    const response = await request(app)
      .post("/items")
      .send({ name: "string", quantity: -1 })
      .expect(400);

    expect(response.body).toEqual({
      error: "Items cannot be negative quantity"
    });
  });

  test("DELETE /items/:id removes an existing item", async () => {
    const app = createApp();

    await request(app)
      .delete("/items/1")
      .expect(204);

    const response = await request(app)
      .get("/items/1")
      .expect(404);

    expect(response.body).toEqual({ error: "Item not found" });
  });

  test("DELETE /items/:id returns 404 when item does not exist", async () => {
    const app = createApp();

    const response = await request(app)
      .delete("/items/999")
      .expect(404);
    expect(response.body).toEqual({ error: "Item not found" });
  });
});
