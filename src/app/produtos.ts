export interface ProdutosInterface {
    id: number,
    descricao: string,
    preco: number,
    descricao_preco: string,
    imagem: string,
    quantidade_estoque: number
}

export interface ProdutoCarrinhoInterface extends ProdutosInterface {
    quantidade: number;
}

export const produtos: ProdutosInterface[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricao_preco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidade_estoque: 0 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricao_preco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidade_estoque: 10 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricao_preco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidade_estoque: 10 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricao_preco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidade_estoque: 10 },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricao_preco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidade_estoque: 10 },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricao_preco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidade_estoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricao_preco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidade_estoque: 10 },
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricao_preco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidade_estoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricao_preco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidade_estoque: 10 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricao_preco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidade_estoque: 10 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricao_preco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidade_estoque: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricao_preco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidade_estoque: 26 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricao_preco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidade_estoque: 10 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricao_preco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidade_estoque: 10 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricao_preco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidade_estoque: 15 }
];
