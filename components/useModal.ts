"use client";
import { useState } from "react";
import { Product } from "@/lib/products";

export default function useModal() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Product | null>(null);

  const show = (p: Product) => {
    setData(p);
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
    setData(null);
  };

  return { open, data, show, hide };
}
