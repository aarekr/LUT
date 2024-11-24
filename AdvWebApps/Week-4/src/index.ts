import {Request, Response, Router} from "express"
import fs from "fs"

const router: Router = Router()

let todos: string[] = []

fs.readFile("data/todos.json", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
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

export default router
