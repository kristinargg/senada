// server/proxy.js

const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

// Define your proxy logic within the handle method
const handle = async (req, res) => {
  try {
    const response = await axios.get(
      'https://data.kemnaker.go.id/api/v1/services' + req.url
    )
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  path: '/api/services', // Define the path where this middleware should be applied
  handler: handle, // Expose the handle function
}
