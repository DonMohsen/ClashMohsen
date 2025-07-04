import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
  ClashRoyalePlayerType,
  GameType,
  

} from '@/types/data.types'
import { BookmarkedType, TagType } from '@/types/general.types'

export interface StoredBookmark {
  tag: string
  game: GameType
  data: BookmarkedType
  tagType:TagType
  
}

interface BookmarkedStore {
  bookmarks: StoredBookmark[]
  isLoading: boolean
  addBookmark: (tag: string, game: GameType, data: BookmarkedType,tagType:TagType) => Promise<void>
  removeBookmark: (tag: string, game: GameType,tagType:TagType) => Promise<void>
  getBookmark: (tag: string, game: GameType,tagType:TagType) => BookmarkedType | undefined
  setLoading: (loading: boolean) => void
}

export const useBookmarkStore = create<BookmarkedStore>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),

    addBookmark: async (tag, game, data, tagType) => {
  set({ isLoading: true })
  try {
    const exists = get().bookmarks.some(
      (b) => b.tag === tag && b.game === game && b.tagType === tagType // include tagType in check
    )
    if (!exists) {
      set((state) => ({
        bookmarks: [...state.bookmarks, { tag, game, data, tagType }],
      }))
    }
  } finally {
    set({ isLoading: false })
  }
},


      removeBookmark: async (tag, game) => {
        set({ isLoading: true })
        try {
          set((state) => ({
            bookmarks: state.bookmarks.filter(
              (b) => !(b.tag === tag && b.game === game)
            ),
          }))
        } finally {
          set({ isLoading: false })
        }
      },

      getBookmark: (tag, game) => {
        return get().bookmarks.find(
          (b) => b.tag === tag && b.game === game
        )?.data
      },
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
