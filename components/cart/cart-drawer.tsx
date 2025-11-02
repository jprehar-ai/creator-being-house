"use client"

import { X, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import Image from "next/image"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeItem, updateItemQuantity, isLoading } = useCart()

  if (!isOpen) return null

  const itemCount = cart?.lines.edges.length || 0
  const total = cart?.cost.totalAmount.amount || "0"
  const currency = cart?.cost.totalAmount.currencyCode || "GBP"

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-950 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-semibold text-white">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {itemCount === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-400 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart?.lines.edges.map(({ node: line }) => {
                const image = line.merchandise.product.images.edges[0]?.node
                return (
                  <div key={line.id} className="flex gap-4 p-4 bg-gray-900 rounded-lg">
                    {image && (
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.altText || line.merchandise.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate">{line.merchandise.product.title}</h3>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="text-gray-400 text-sm">{line.merchandise.title}</p>
                      )}
                      <p className="text-amber-400 font-semibold mt-1">
                        {currency} {Number.parseFloat(line.merchandise.price.amount).toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateItemQuantity(line.id, Math.max(1, line.quantity - 1))}
                          disabled={isLoading || line.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-white w-8 text-center">{line.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateItemQuantity(line.id, line.quantity + 1)}
                          disabled={isLoading}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto text-red-400 hover:text-red-300"
                          onClick={() => removeItem(line.id)}
                          disabled={isLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {itemCount > 0 && (
          <div className="border-t border-gray-800 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-gray-400">Total</span>
              <span className="text-white font-semibold">
                {currency} {Number.parseFloat(total).toFixed(2)}
              </span>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              size="lg"
              onClick={() => {
                if (cart?.checkoutUrl) {
                  window.location.href = cart.checkoutUrl
                }
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
