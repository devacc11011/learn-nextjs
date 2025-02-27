import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    try {
        await res.revalidate('/')
        return res.json({revalidate: true})
    }catch (e){
        return res.status(500).json({revalidate: false})
    }
}