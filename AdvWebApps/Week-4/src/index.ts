import {Request, Response, Router} from "express"
import fs from "fs"

const router: Router = Router()

let todos: string[] = []

fs.readFile("data.json", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.error('virhetilanne:', err)
        return
    }
    try {
        todos = JSON.parse(data)
    } catch (error: any) {
        console.error(`Error parsing JSON: ${error}`)
    }
})

router.get("/", (req: Request, res: Response) => {
    res.json(todos)
})
router.get("/:id", (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
    try {
        res.json(todos[id])
    } catch (error: any) {
        console.error('Virhetilanne: ', error)
    }
})
router.get("/todos/:id", (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
    console.log("get todos id:", id, todos[id])
    try {
        if (todos[id] == undefined) 
            res.json('User not found')
        res.json(todos[id])
    } catch (error: any) {
        console.error('Virhetilanne: ', error)
    }
})

router.post("/add", (req: Request, res: Response) => {
    let todo: string = req.body
    todos.push(todo)
    fs.writeFile("data.json", JSON.stringify(todos), (err: NodeJS.ErrnoException | null) => {
        if (err) {
            console.error('virhetilanne:', err)
            return
        }
        res.json(todos)
    })
})


//router.post("/delete/:id", (req: Request, res: Response) => {})

export default router
