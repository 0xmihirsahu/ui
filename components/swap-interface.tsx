"use client";

import { useState } from "react";
import { ChevronDown, ArrowDown, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function SwapInterface() {
  const [limitPrice, setLimitPrice] = useState(false);
  const [totalTrades, setTotalTrades] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("Patty");
  const [toCurrency, setToCurrency] = useState("Solo");
  const [fromAmount, setFromAmount] = useState("0.0");
  const [toAmount, setToAmount] = useState("0.0");
  const [maxDuration, setMaxDuration] = useState("Min");
  const [maxDurationValue, setMaxDurationValue] = useState("4");

  const currencies = ["Patty", "Solo"];
  const timeUnits = ["Min", "Hour", "Day"];

  const handleSwap = () => {
    // Swap currencies
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    
    // Swap amounts
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const getTokenLogo = (currency: string, isFrom: boolean) => {
    if (currency === "Patty") {
      return (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
            fill={isFrom ? "white" : "#F6411B"}
            stroke={isFrom ? "white" : "#F6411B"}
            strokeWidth="2"
          />
          {!isFrom && (
            <path
              d="M12 8L8 10V14L12 16L16 14V10L12 8Z"
              fill="white"
            />
          )}
        </svg>
      );
    } else {
      return (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill={isFrom ? "#F6411B" : "white"} />
          <path
            d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
            fill={isFrom ? "white" : "#F6411B"}
          />
          <path
            d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
            fill={isFrom ? "white" : "#F6411B"}
          />
          <path
            d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"
            fill={isFrom ? "white" : "#F6411B"}
          />
          <path
            d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
            fill={isFrom ? "white" : "#F6411B"}
          />
          <path
            d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
            fill={isFrom ? "white" : "#F6411B"}
          />
        </svg>
      );
    }
  };

  return (
    <div className="max-w-md w-full space-y-4">
      {/* Swap Card */}
      <div className="bg-card rounded-3xl p-5 shadow-lg">
        {/* From Section */}
        <div className="mb-4">
          <p className="text-[#F6411B] mb-2">From</p>
          <div className="bg-[#F6411B]/10 rounded-2xl p-4 flex items-center justify-between border border-[#F6411B]/20">
            <div className="flex items-center">
              <div className={`${fromCurrency === "Patty" ? "bg-[#F6411B]" : "bg-white"} rounded-full p-2 mr-2`}>
                <div className="w-6 h-6 flex items-center justify-center">
                  {getTokenLogo(fromCurrency, true)}
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#F6411B] font-bold text-lg focus:outline-none">
                  {fromCurrency}
                  <ChevronDown className="ml-1 h-5 w-5 text-[#F6411B]/70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#F6411B]/10 text-[#F6411B] border-[#F6411B]/20">
                  {currencies.map((currency) => (
                    <DropdownMenuItem
                      key={currency}
                      className="focus:bg-[#F6411B]/20 cursor-pointer"
                      onClick={() => setFromCurrency(currency)}
                    >
                      <div className="flex items-center justify-between w-full">
                        {currency}
                        {currency === fromCurrency && (
                          <Check className="h-4 w-4 ml-2" />
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent border-none text-[#F6411B] text-2xl font-bold text-right w-24 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <button 
            onClick={handleSwap}
            className="bg-[#F6411B]/10 p-1 rounded-full border border-[#F6411B]/20 hover:bg-[#F6411B]/20 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-[#F6411B]" />
          </button>
        </div>

        {/* To Section */}
        <div className="mb-4">
          <p className="text-[#F6411B] mb-2">To</p>
          <div className="bg-[#F6411B]/10 rounded-2xl p-4 flex items-center justify-between border border-[#F6411B]/20">
            <div className="flex items-center">
              <div className={`${toCurrency === "Patty" ? "bg-[#F6411B]" : "bg-white"} rounded-full p-2 mr-2`}>
                <div className="w-6 h-6 flex items-center justify-center">
                  {getTokenLogo(toCurrency, false)}
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#F6411B] font-bold text-lg focus:outline-none">
                  {toCurrency}
                  <ChevronDown className="ml-1 h-5 w-5 text-[#F6411B]/70" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#F6411B]/10 text-[#F6411B] border-[#F6411B]/20">
                  {currencies.map((currency) => (
                    <DropdownMenuItem
                      key={currency}
                      className="focus:bg-[#F6411B]/20 cursor-pointer"
                      onClick={() => setToCurrency(currency)}
                    >
                      <div className="flex items-center justify-between w-full">
                        {currency}
                        {currency === toCurrency && (
                          <Check className="h-4 w-4 ml-2" />
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="bg-transparent border-none text-[#F6411B] text-2xl font-bold text-right w-24 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        {/* Rate Display */}
        <div className="flex justify-between mb-4">
          <span className="text-[#F6411B]">Sell Patty at rate</span>
          <span className="text-[#F6411B] cursor-pointer hover:underline">
            Set market rate
          </span>
        </div>

        {/* Rate Card */}
        <div className="flex">
          <div className="bg-[#F6411B]/10 rounded-l-xl p-4 flex-1 border border-[#F6411B]/20">
            <span className="text-[#F6411B] block">Solo</span>
            <div className="flex items-baseline">
              <span className="text-[#F6411B] text-xl font-bold">237.777</span>
              <span className="text-[#F6411B]/70 text-sm ml-2">
                ~625.35 USD
              </span>
            </div>
          </div>
          <div className="bg-[#F6411B]/10 rounded-r-xl p-4 flex-1 border border-[#F6411B]/20 border-l-0">
            <span className="text-[#F6411B] block">Min Amount</span>
            <span className="text-[#F6411B] text-xl font-bold">{(parseFloat(toAmount) - 0.3).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Trade Settings Card */}
      <div className="bg-card rounded-3xl p-5 shadow-lg">
        {/* Total Trades */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-[#F6411B]">Expiry</span>
            <span className="text-[#F6411B] font-bold">{totalTrades} {maxDuration}</span>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                  fill="#F6411B"
                />
                <path
                  d="M15 22C16.6569 22 18 20.6569 18 19C18 17.3431 16.6569 16 15 16C13.3431 16 12 17.3431 12 19C12 20.6569 13.3431 22 15 22Z"
                  fill="white"
                />
                <path
                  d="M25 22C26.6569 22 28 20.6569 28 19C28 17.3431 26.6569 16 25 16C23.3431 16 22 17.3431 22 19C22 20.6569 23.3431 22 25 22Z"
                  fill="white"
                />
                <path
                  d="M20 28C21.1046 28 22 27.1046 22 26C22 24.8954 21.1046 24 20 24C18.8954 24 18 24.8954 18 26C18 27.1046 18.8954 28 20 28Z"
                  fill="white"
                />
                <path
                  d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"
                  fill="white"
                />
                <path
                  d="M25 14C25.5523 14 26 13.5523 26 13C26 12.4477 25.5523 12 25 12C24.4477 12 24 12.4477 24 13C24 13.5523 24.4477 14 25 14Z"
                  fill="white"
                />
              </svg>
            </div>
            <Slider
              defaultValue={[totalTrades]}
              max={10}
              step={1}
              onValueChange={(value) => setTotalTrades(value[0])}
              className="flex-1"
            />

          </div>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full bg-[#F6411B] hover:bg-[#F6411B]/90 text-white font-bold py-4 px-6 rounded-xl mt-6 transition-colors">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
