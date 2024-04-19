Ecommerce frontend for buying and leasing music. Built using Next.js, connects to a [saleor-platform](https://github.com/saleor/saleor-platform) backend used to track inventory and orders. Interfaces with Saleor backend using Apollo and GraphQL. This is an active work in progress.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Current Features

Browse through a playlist of songs, seek through tracks by clicking position in waveform, shuffle through playlist and enable song repeat.

https://github.com/Jacob33123/yahtzen-shop/assets/12245405/3541c576-f4d9-444c-ac76-48cfa84df7b3



Filter current playlist by Beats per Minute (BPM), and/or availability of leasing/exclusive purchase rights (Note: this availability tracked in Saleor).

https://github.com/Jacob33123/yahtzen-shop/assets/12245405/37b0437e-f891-49a4-ac03-0739f71e21ca



Purchase options are displayed in track player view, and the buttons are dynamically disabled based on availability and whether or not the current track is already in your cart.

https://github.com/Jacob33123/yahtzen-shop/assets/12245405/901dcfd3-1cfc-4bc5-a4ba-c2637ccc7408



Dynamically updating shopping cart with active subtotal.

https://github.com/Jacob33123/yahtzen-shop/assets/12245405/f15394e0-c787-4d4d-a28b-2115031386f6




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
