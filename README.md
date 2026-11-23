# CryptoCheckpoint — Backend

Backend for **CryptoCheckpoint**, my final-year project: a cryptocurrency payment gateway that lets e-commerce merchants accept crypto. Merchants get API keys, create payment links with QR codes, and receive payments to wallets generated per link.

**Frontend:** [FYP-Frontend](https://github.com/Abdullahahmad666/FYP-Frontend)

## Features
- Merchant sign-up and login
- API key generation for store integrations
- Payment links with QR codes (`qrcode`)
- Ethereum wallet generation and transaction signing with Web3 via a QuickNode RPC endpoint
- Shop, stock, sales and customer records for each merchant
- Email notifications with Nodemailer

## Tech stack
Node.js · Express · MongoDB (Mongoose) · Web3.js · ethereumjs-wallet · QRCode · Nodemailer · Vercel

## Run locally
```bash
git clone https://github.com/Abdullahahmad666/FYP-Backend.git
cd FYP-Backend
npm install
```
Create a `config.env` file in the project root (it is git-ignored, never commit it):
```
MONGO_URI=your_mongodb_connection_string
QUICKNODE_URL=your_ethereum_rpc_endpoint
QUICKNODE_BSC_URL=your_bsc_rpc_endpoint
```
```bash
node app.js        # http://localhost:5000
```
When deploying to Vercel, add the same variables under Project → Settings → Environment Variables.

> **Note:** this is an academic prototype built for testnets. Don't use it with real funds without a security review; private keys must never be sent in URLs or logged.

---

**Built by [Abdullah Ahmad](https://abdullah-ahmad-portfolio.vercel.app)**, Full Stack Software Engineer in Lahore, Pakistan · [GitHub](https://github.com/Abdullahahmad666) · [LinkedIn](https://www.linkedin.com/in/abdullah-ahmad-a00913259/)
