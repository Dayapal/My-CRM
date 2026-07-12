import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Search,
} from "lucide-react";

import { useState } from "react";

import { Input }
from "@/components/ui/input";

import {
  useSearch,
} from "./useSearch";

import SearchResults
from "./SearchResults";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({
  open,
  onClose,
}: Props) {

  const [
    query,
    setQuery,
  ] = useState("");

  const {
    data,
    isLoading,
  } = useSearch(query);

  return (

    <Dialog
      open={open}
      onOpenChange={onClose}
    >

      <DialogContent className="max-w-2xl p-0">

        <DialogHeader className="border-b p-4">

          <DialogTitle>

            Global Search

          </DialogTitle>

        </DialogHeader>

        <div className="p-4">

          <div className="relative">

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
              autoFocus
              value={query}
              placeholder="Search Leads, Contacts, Deals..."
              className="pl-10"
              onChange={(e)=>
                setQuery(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <div
          className="
            max-h-500px
            overflow-y-auto
            border-t
          "
        >

          <SearchResults
            query={query}
            loading={isLoading}
            results={data}
          />

        </div>

      </DialogContent>

    </Dialog>

  );

}