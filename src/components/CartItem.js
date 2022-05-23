import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../slices/basketSlice"

const CartItem = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch()
  const addItemToCart = () => {
    const item = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    }
    dispatch(addToCart(item))
  }
  const removeItemFromCart = () => {
    const item = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    }
    dispatch(removeFromCart({ id }))
  }

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col ">
        <button onClick={addItemToCart} className="button mt-auto">
          Add to Cart
        </button>
        <button onClick={removeItemFromCart} className="button mt-auto">
          Remove from Cart
        </button>
      </div>
    </div>
  )
}
export default CartItem
