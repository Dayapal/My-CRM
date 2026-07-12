import {
  Search,
  Loader2,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Input }
from "@/components/ui/input";

import SearchResults
from "./SearchResults";


import { useSearch } from "./useSearch";

export default function SearchBar() {

  const [
    query,
    setQuery,
  ] = useState("");

  const [
    open,
    setOpen,
  ] = useState(false);

  const inputRef =
    useRef<HTMLInputElement>(null);

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const {
    data,
    isLoading,
  } = useSearch(query);

  useEffect(() => {

    const handleKeyDown =
      (
        e: KeyboardEvent
      ) => {

        if (

          e.ctrlKey &&

          e.key === "k"

        ) {

          e.preventDefault();

          inputRef.current?.focus();

          setOpen(true);

        }

        if (
          e.key === "Escape"
        ) {

          setOpen(false);

        }

      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, []);

  useEffect(() => {

    const handleClick =
      (
        e: MouseEvent
      ) => {

        if (

          wrapperRef.current &&

          !wrapperRef.current.contains(
            e.target as Node
          )

        ) {

          setOpen(false);

        }

      };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>

      document.removeEventListener(
        "mousedown",
        handleClick
      );

  }, []);

  return (

    <div
      ref={wrapperRef}
      className="relative w-full max-w-md"
    >

      <Search

        className="
          absolute
          left-3
          top-3
          h-5
          w-5
          text-slate-400
        "

      />

      <Input

        ref={inputRef}

        value={query}

        placeholder="Search CRM... (Ctrl + K)"

        className="pl-10"

        onFocus={() =>
          setOpen(true)
        }

        onChange={(e)=>

          setQuery(
            e.target.value
          )

        }

      />
            {isLoading && (

        <Loader2
          className="
            absolute
            right-3
            top-3
            h-4
            w-4
            animate-spin
          "
        />

      )}

      {open && query && (

        <div
          className="absolute
            left-0
            right-0
            top-12
            z-50 max-h-125
            overflow-auto

            rounded-xl
            border
            bg-white
            shadow-xl
          "
        >

          <SearchResults

            query={query}

            results={data}

            loading={
              isLoading
            }

          />

        </div>

      )}

    </div>

  );

}