import {Request, Response, Router} from "express"

const router: Router = Router()

let poems: string[] = []

router.get("/", (req: Request, res: Response) => {
    console.log("juurihakemisto")
    res.json(poems)
})

router.get("/hello", (req: Request, res: Response) => {
    let item = {
        msg: "Hello world!"
    }
    res.json(item)
})

export default router
