# Boilerplate fullstack

Criando passo a passo um boilerplate inicial para uma aplicação fullstack

---
---

#### Principais tecnologias:

## NodeJS

[Node.js®](https://nodejs.org/pt) é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

**Instalação**

> A melhor forma é instalar via [NVM for Windows (1.1.12)](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe). Verifique novas [versões](https://github.com/coreybutler/nvm-windows/releases).
>
> Apos instalação execute os dois comando logo a baixo para instalar a última versão do NodeJS lts e defini-la como padrão.

> Comandos essenciais: 
>```bash
> $ nvm install lts  ## Instalar a última versão lts do NodeJS ##
> $ nvm use newest  ## Utilizar a últimar versão instalada* ##
>```
>
> Comandos úteis:
>```bash
> $ nvm -h  ## Exibir menu de ajuda do comando ##
> $ node -v  ## Verificar versão do instalada instalado ##
> $ npm -v  ## Verificar versão do npm instalado ##
>```

> *Instale [pnpm](https://pnpm.io/pt/) para o gerenciamento dos pacotes com o seguinte comando:*
>```bash
> $ npm i -g pnpm ### Instalar pnpm de forma global
>```

# Git Bash

[Git](https://git-scm.com/) é um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com tudo, desde projetos pequenos até muito grandes, com rapidez e eficiência.

**Instalação**

> Baixe e execute o [git for windows (2.47.0)](https://github.com/git-for-windows/git/releases/download/v2.47.0.windows.1/Git-2.47.0-64-bit.exe), Verifique novas [versões](https://git-scm.com/downloads/win).
>
> Ao concluir a instalação e configuração, pode-se encontrar o git bash no [Windows Terminal](https://github.com/microsoft/terminal).

> *Com o git bash instalado, utilize-o para adicionar alguns "alias" para os principais comando do pnpm*
>
> * Execute o [Terminal com privilégios de administrador](https://learn.microsoft.com/pt-br/windows/terminal/faq) e execute o comando abaixo:
> * `$ notepad /c/Program\ Files/Git/etc/profile.d/aliases.sh`
> * No bloco de notas adione o texto abaixo:
>
> ```bash
> # --show-control-chars: help showing Korean or accented characters
> alias l='ls -Flha --color=auto --show-control-chars'
>
> alias pa='pnpm add'
> alias pi='pnpm install'
> alias pn=pnpm
> alias pr='pnpm remove'
> alias pu='pnpm update'
> alias pv='pnpm dev'
> alias px='pnpm dlx'
> ```

# NextJS

[Next.js](https://nextjs.org/) é um framework [React](https://react.dev/) para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário, e Next.js para recursos e otimizações adicionais.

**Instalação**

> Execute o seguinte comando para criar o projeto NextJS:
>```bash
> $ px create-next-app@latest . --ts --tailwind --eslint --app --src-dir --turbopack --import-alias @/* --use-pnpm --skip-install
>```
>
> O comando irá criar seu projeto com as seguintes configurações:
> * Dentro da pasta atual com o mesmo nome da pasta (utilize [Kebab Case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case)).
> * Inicializa o [Typescript](https://www.typescriptlang.org/) no projeto.
> * Inicializa o [TailwindCSS](https://tailwindcss.com/) no projeto.
> * Inicializa o [Eslint](https://eslint.org/) no projeto.
> * Inicializa [App routes](https://nextjs.org/docs/app) no projeto.
> * Cria a pasta src para estruturar o projeto.
> * Ativa o [Turbopack](https://turbo.build/) para o desenvolvimento.
> * Configura alias para imports como "@/*".
> * Especifica o uso do pnpm no projeto.
> * Pula a instalação dos pacotes.
>
> *Para criar o projeto dentro da pasta atual, substitura o nome "my-app" por "."*


> *Next@15.0.1 está trazendo versões conflitantes, para resolver execute o seguinte comando:*
>```bash
> $ pu react@18 react-dom@18 eslint@9 <*Atualizar versões de pacotes*>
>```

# Shadcn/ui

[Shadcn](https://ui.shadcn.com/) traz componentes lindamente projetados que você pode copiar e colar em seus aplicativos. Acessível. Personalizável. Código aberto.

**Instalação**

> Dentro da pasta do projeto execute
>```bash
> $ px shadcn@latest init -d
>```
>
> O comando irá adicionar pacotes e arquivos com configurações padrões ao seu projeto.
>
> ---
>
> Para a instalação de componentes utilize o comando
>```bash
> $ px shadcn@latest add button dropdown-menu toast
>```
>
> O comando irá criar a estrutura e arquivos necessários para a utilização do(s) componente(s) instalados.

# Configurar Themes

Utilizar Tailwind CSS e shadcn/ui para configurar [temas](https://ui.shadcn.com/docs/theming) para o projeto é simples.

> Execute o comando para instalar o pacote necessário
>```bash
> $ pa next-themes
>```
>
>---
>
> Crie o arquivo src/components/theme-provider.tsx
>```ts
>"use client";
>
>import { ThemeProvider as NextThemesProvider } from "next-themes";
>import { type ThemeProviderProps } from "next-themes/dist/types";
>
>export function ThemeProvider({ children }: ThemeProviderProps) {
>  return (
>    <NextThemesProvider
>      attribute="class"
>      defaultTheme="system"
>      enableSystem
>      disableTransitionOnChange
>    >
>      {children}
>    </NextThemesProvider>
>  );
>}
>```
>
>---
>
> Adicione o `ThemeProvider` ao seu `RootLayout` conforme exemplo abaixo
>```ts
>import { ThemeProvider } from "@/components/theme-provider"
>
>export default function RootLayout({ children }: RootLayoutProps) {
>  return (
>    <html lang="pt-br" suppressHydrationWarning>
>      <body>
>        <ThemeProvider>{children}</ThemeProvider>
>      </body>
>    </html>
>  );
>}
>```
>
>---
>
> Crie o arquivo src/components/mode-toggle.tsx
>
>```ts
>"use client";
>
>import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
>import { useTheme } from "next-themes";
>
>import { Button } from "@/components/ui/button";
>import {
>  DropdownMenu,
>  DropdownMenuContent,
>  DropdownMenuItem,
>  DropdownMenuTrigger,
>} from "@/components/ui/dropdown-menu";
>
>export function ModeToggle() {
>  const { setTheme } = useTheme();
>
>  return (
>    <DropdownMenu>
>      <DropdownMenuTrigger asChild>
>        <Button variant="outline" size="icon">
>          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
>          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
>          <span className="sr-only">Toggle theme</span>
>        </Button>
>      </DropdownMenuTrigger>
>      <DropdownMenuContent align="end">
>        <DropdownMenuItem onClick={() => setTheme("light")}>
>          Light
>        </DropdownMenuItem>
>        <DropdownMenuItem onClick={() => setTheme("dark")}>
>          Dark
>        </DropdownMenuItem>
>        <DropdownMenuItem onClick={() => setTheme("system")}>
>          System
>        </DropdownMenuItem>
>      </DropdownMenuContent>
>    </DropdownMenu>
>  );
>}
>```
> *Basta utilizar este exemplo para alterar seu tema entre light e dark*

# Auth

[Auth.js](https://authjs.dev/) é uma biblioteca independente de tempo de execução baseada em APIs da Web padrão que se integra profundamente com várias estruturas JavaScript modernas para fornecer uma experiência de autenticação que é simples de começar, fácil de estender e sempre privada e segura!

> Execute o comando para instalar o pacote necessário
>```bash
> $ pa next-auth@beta 
>```
>
>---
>
> Execute o comando para o `Auth` adicionar a variável de ambiente
>```bash
> $ px auth secret
>```
>---
>
> Crie o arquivo src/lib/auth.ts
>```ts
>import NextAuth, { type NextAuthConfig } from "next-auth";
>import Credentials from "next-auth/providers/credentials";
>
>const credentials = Credentials({
>  credentials: {},
>  authorize: () => ({}),
>});
>
>const nextAuthConfig: NextAuthConfig = {
>  providers: [credentials],
>};
>
>export const {
>  auth,
>  signIn,
>  signOut,
>  handlers: { GET, POST },
>} = NextAuth(nextAuthConfig);
>```
>
>---
>
> Crie o arquivo src/app/api/auth/[...nextauth]/route.ts
>```ts
>export { GET, POST } from "@/lib/auth";
>```
>
> *Na rota /api/auth/signin/ já é possível visualizar o botão de login "Sign in with Credentials"*
>

# Prisma (SQLite)

[Prisma](https://www.prisma.io/) fornece a melhor experiência para sua equipe trabalhar e interagir com bancos de dados. Até mesmo coisas complexas como pool de conexões, cache, assinaturas de banco de dados em tempo real são fáceis com nossos produtos.
Crie seu aplicativo, fortaleça para que tudo funcione perfeitamente e cresça com seus usuários e requisitos.

[SQLite](https://www.sqlite.org/) é uma biblioteca em processo que implementa um mecanismo de banco de dados SQL transacional, autocontido, sem servidor e com configuração zero. O código para SQLite é de domínio público e, portanto, é gratuito para uso para qualquer propósito, comercial ou privado. SQLite é o banco de dados mais amplamente implantado no mundo, com mais aplicativos do que podemos contar, incluindo vários projetos de alto perfil.

**Instalação**

> Instala prisma client, prisma adapter e prisma como dependência de desenvolvimento
>```bash
>$ pa @prisma/client @auth/prisma-adapter
>$ pa prisma -D
>```

**Inicialização**

> Adiciona o schema do prisma ao arquivo prisma/schema.prisma e a variável de ambiente para comunicação com SQLite ao arquivo /.env
>```bash
>$ px prisma init --datasource-provider sqlite
>```
>
>---
>
> Adicione os seguintes modelos ao arquivo /prisma/schema.prisma
>```prolog
>model Account {
>  id                 String  @id @default(cuid())
>  userId             String  @map("user_id")
>  type               String
>  provider           String
>  providerAccountId  String  @map("provider_account_id")
>  refresh_token      String?
>  access_token       String?
>  expires_at         Int?
>  token_type         String?
>  scope              String?
>  id_token           String?
>  session_state      String?
> 
>  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
> 
>  @@unique([provider, providerAccountId])
>  @@map("accounts")
>}
> 
>model Session {
>  id           String   @id @default(cuid())
>  sessionToken String   @unique @map("session_token")
>  userId       String   @map("user_id")
>  expires      DateTime
>  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
> 
>  @@map("sessions")
>}
> 
>model User {
>  id            String    @id @default(cuid())
>  name          String?
>  email         String?   @unique
>  emailVerified DateTime? @map("email_verified")
>  image         String?
>  accounts      Account[]
>  sessions      Session[]
> 
>  @@map("users")
>}
> 
>model VerificationToken {
>  identifier String
>  token      String
>  expires    DateTime
> 
>  @@unique([identifier, token])
>  @@map("verification_tokens")
>}
>```

**Configuração**

> Para melhorar a performance garantido a criação de apenas uma instância do prisma crie o arquivo src/lib/prisma.ts
>
>```ts
>import { PrismaClient } from "@prisma/client"
> 
>const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
> 
>export const prisma = globalForPrisma.prisma || new PrismaClient()
> 
>if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
>```
>
>---
>
> Atualize o arquivo src/lib/auth.ts para utilizar o prisma adapter
>
>```ts
>import { PrismaAdapter } from "@auth/prisma-adapter";
>import { prisma } from "./prisma";
>
>              {/*...*/}
>
>const nextAuthConfig: NextAuthConfig = {
>  adapter: PrismaAdapter(prisma), // adiciona o prisma adapter
>  providers: [credentials],
>};
>
>              {/*...*/}
>```
