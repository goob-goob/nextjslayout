import Cors from 'cors'
import useCorsMiddleware from '@/hooks/useCorsMiddleware'

const cors = Cors({
    methods: ['GET'],
    origin: ['http://localhost:4000']
})

export default async function handler(req, res) {
    await useCorsMiddleware(req, res, cors)
    console.log('got request')
    res.status(200).json({ name: 'John Doe' })
}
