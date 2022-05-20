import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="flex items-center px-1 py-2 bg-amazon_blue">
        {/* Logo */}
        <div className="mt-2 flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            draggable={false}
            className="cursor-pointer"
          />
        </div>

        {/* Search Box */}
        <div className="hidden cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md h-10 sm:flex items-center">
          <input className="px-4 rounded-l-md h-full flex-grow" type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Side Info */}
        <div className="flex text-xs mx-6 space-x-6 text-white items-center whitespace-nowrap select-none">
          <div className="link">
            <p>Hello Neil Datta</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="flex link relative items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:block font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <div className="flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
          <MenuIcon className="w-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:block">Electronics</p>
        <p className="link hidden lg:block">Food & Grocery</p>
        <p className="link hidden lg:block">Prime</p>
        <p className="link hidden lg:block">Buy Again</p>
        <p className="link hidden lg:block">Shopper Toolkit</p>
        <p className="link hidden lg:block">Health & Personal Care</p>
      </div>
    </header>
  )
}
export default Header
