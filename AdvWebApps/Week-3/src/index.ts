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

router.post("/sum/:numbers", (req: Request, res: Response) => {
    let numbers: string = req.params.numbers
    numbers = numbers.substring(1, numbers.length-1)
    let osat = numbers.split(",")
    let sum = 0
    for (let i=0; i<osat.length; i++) {
        sum += Number(osat[i].trim())
    }
    let answer = {
        "sum": sum
    }
    res.json(answer)
})

export default router
