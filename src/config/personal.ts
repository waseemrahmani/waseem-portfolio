export type BookStatus = "read" | "re-reading" | "to-read";

export type Book = {
  title: string;
  author?: string;
  status: BookStatus;
  image?: string;
};

export type BookSection = {
  slug: string;
  title: string;
  description: string;
  books: readonly Book[];
};

export const bookSections: readonly BookSection[] = [
  {
    slug: "non-fiction",
    title: "Non-fiction",
    description: "Books on ideas, people, money, work, and the world.",
    books: [
      { title: "Money, Myths and Mantras", author: "Devina Mehra", status: "read", image: "/images/books/money-myths-mantras.svg" },
      { title: "Rework", author: "Jason Fried and David Heinemeier Hansson", status: "read", image: "/images/books/rework.svg" },
      { title: "Coffee Can Investing", author: "Saurabh Mukherjea, Rakshit Ranjan and Pranab Uniyal", status: "read", image: "/images/books/coffee-can-investing.svg" },
      { title: "Break Point", author: "Saurabh Mukherjea", status: "to-read", image: "/images/books/break-point.svg" },
      { title: "Atomic Habits", author: "James Clear", status: "read", image: "/images/books/atomic-habits.svg" },
      { title: "Mindset", author: "Carol S. Dweck", status: "read", image: "/images/books/mindset.svg" },
      { title: "The Psychology of Money", author: "Morgan Housel", status: "read", image: "/images/books/psychology-of-money.svg" },
      { title: "Think and Grow Rich", author: "Napoleon Hill", status: "read", image: "/images/books/think-and-grow-rich.svg" },
      { title: "The Richest Man in Babylon", author: "George S. Clason", status: "re-reading", image: "/images/books/richest-man-babylon.svg" },
      { title: "Ready for Anything", author: "David Allen", status: "to-read", image: "/images/books/ready-for-anything.svg" },
      { title: "The Power of Failure", status: "to-read", image: "/images/books/power-of-failure.svg" },
      { title: "How to Win Friends and Influence People", author: "Dale Carnegie", status: "read", image: "/images/books/how-to-win-friends.svg" },
      { title: "You Can Negotiate Anything", author: "Herb Cohen", status: "to-read", image: "/images/books/negotiate-anything.svg" },
      { title: "The Art of Thinking Clearly", author: "Rolf Dobelli", status: "read", image: "/images/books/art-of-thinking.svg" },
    ],
  },
  {
    slug: "fiction",
    title: "Fiction",
    description: "Stories, novels, and imaginative worlds I enjoy.",
    books: [],
  },
] as const;
