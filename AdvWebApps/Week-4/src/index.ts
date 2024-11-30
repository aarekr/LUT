import {Request, Response, Router} from "express"
import { compile } from "morgan"
import { User, IUser } from './models/User'
import populateUsers from "../data/users"

const router: Router = Router()

// let todos: string[] = []

router.get("/", (req: Request, res: Response) => {
    //res.json(todos)
    res.json({message: "Index root"})
})
router.get("/:id", (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
})
router.get("/todos/:id", (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
})

router.post("/add", (req: Request, res: Response) => {
    let todo: string = req.body
})


//router.post("/delete/:id", (req: Request, res: Response) => {})

router.get("/api/users/populate", async (req: Request, res: Response) => {
    for (let i=0; i<2; i++) {
        const user: IUser = new User({
            user: populateUsers[i].user
        })
        await user.save()
    }
    console.log("Database populated")
    res.json({message: "Database populated"})
})

export default router
