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
      { title: "Money, Myths and Mantras", author: "Devina Mehra", status: "read", image: "/images/books/money-myths-mantras.png" },
      { title: "Rework", author: "Jason Fried and David Heinemeier Hansson", status: "read", image: "/images/books/rework.png" },
      { title: "Coffee Can Investing", author: "Saurabh Mukherjea, Rakshit Ranjan and Pranab Uniyal", status: "read", image: "/images/books/coffee-can-investing.png" },
      { title: "Break Point", author: "Saurabh Mukherjea", status: "to-read", image: "/images/books/break-point.png" },
      { title: "Atomic Habits", author: "James Clear", status: "read", image: "/images/books/atomic-habits.png" },
      { title: "Mindset", author: "Carol S. Dweck", status: "read", image: "/images/books/mindset.png" },
      { title: "The Psychology of Money", author: "Morgan Housel", status: "read", image: "/images/books/psychology-of-money.png" },
      { title: "Think and Grow Rich", author: "Napoleon Hill", status: "read", image: "/images/books/think-and-grow-rich.png" },
      { title: "The Richest Man in Babylon", author: "George S. Clason", status: "re-reading", image: "/images/books/richest-man-babylon.png" },
      { title: "Ready for Anything", author: "David Allen", status: "to-read", image: "/images/books/ready-for-anything.png" },
      { title: "The Power of Failure", status: "to-read", image: "/images/books/power-of-failure.png" },
      { title: "How to Win Friends and Influence People", author: "Dale Carnegie", status: "read", image: "/images/books/how-to-win-friends.png" },
      { title: "You Can Negotiate Anything", author: "Herb Cohen", status: "to-read", image: "/images/books/negotiate-anything.png" },
      { title: "The Art of Thinking Clearly", author: "Rolf Dobelli", status: "read", image: "/images/books/art-of-thinking.png" },
    ],
  },
  {
    slug: "fiction",
    title: "Fiction",
    description: "Stories, novels, and imaginative worlds I enjoy.",
    books: [],
  },
] as const;
