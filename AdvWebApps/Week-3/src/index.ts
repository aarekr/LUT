import {Request, Response, Router} from "express"

const router: Router = Router()

let poems: string[] = []

router.get("/", (req: Request, res: Response) => {
    //console.log("juurihakemisto")
    res.json(poems)
})

router.get("/hello", (req: Request, res: Response) => {
    let item = {
        msg: "Hello world!"
    }
    res.json(item)
})

router.get("/echo/:id", (req: Request, res: Response) => {
    let id: string = req.params.id
    let answer = `id: ${id}`
    res.json(answer)
})

export default router
