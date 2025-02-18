import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Category } from "../entity/Category"

export class CategoriesController {
  static async index(req: Request, res: Response) {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categories = await categoryRepository.find()
    return res.status(200).json(categories)
  }

  static async create(req: Request, res: Response) {
    const { title, description } = req.body;
    const category = new Category();
    category.title = title;
    category.description = description;

    const categoryRepository = AppDataSource.getRepository(Category)
    await categoryRepository.save(category)

    return res
      .status(201)
      .json(category)
  }

  static async read(req: Request, res: Response) {
    const { id } = req.params;
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { id },
    });

    if (category) {
      res.status(200).json(category)
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { id },
    });
    if (category) {
      category.title = title;
      category.description = description;
      await categoryRepository.save(category);
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
    
  }

  static async patch(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { id },
    });

    if (category) {
      if (title != null) {
        category.title = title;
      }
      if (description != null) {
        category.description = description;
      }
  
      await categoryRepository.save(category);
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const categoryRepository = AppDataSource.getRepository(Category)
    const category = await categoryRepository.findOne({
      where: { id }
    })
    if (!category) {
      await categoryRepository.remove(category)
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "La Categoría no existe" });
    }
  }
}