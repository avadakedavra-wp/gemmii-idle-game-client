import create from 'zustand';

interface RankState {
  rank: number;
  setRank: (newRank: number) => void;
}

const useRankStore = create<RankState>((set) => ({
  rank: 4,
  setRank: (newRank) => set({ rank: newRank }),
}));

export default useRankStore;