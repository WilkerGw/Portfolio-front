import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename || !request.body) {
    return NextResponse.json({ message: 'Nome do arquivo não encontrado.' }, { status: 400 });
  }

  // Faz o upload do arquivo para o Vercel Blob
  const blob = await put(filename, request.body, {
    access: 'public',
    // Adiciona um sufixo aleatório ao nome do arquivo para evitar conflitos.
    addRandomSuffix: true, 
  });

  // Retorna a URL do vídeo para ser salva em um banco de dados ou onde preferir
  return NextResponse.json(blob);
}