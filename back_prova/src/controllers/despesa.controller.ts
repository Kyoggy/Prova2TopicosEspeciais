import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadastrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });

    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadastrada });
  }


  async total(request: Request, response: Response) {
    try {
      
      const despesas = await prisma.despesa.findMany({});
  
      const total = despesas.reduce((acc, despesa) => acc + despesa.preco, 0); // Calcula o valor total somando os preços de todas as despesas
      const media = total / despesas.length; // Calcula a média de gasto dividindo o valor total pelo número de despesas
      return response.status(200).json({ message: "Ok", total, media });
    } catch (error) {
      console.error('Erro ao calcular despesas:', error);
      response.status(500).json({ error: 'Ocorreu um erro ao calcular as despesas.' });
    }

    
  }



  async listar(request: Request, response: Response): Promise<Response> {
    const despesas = await prisma.despesa.findMany({});
    return response.status(200).json({ message: "Ok", dados: despesas });
  }
  
}
