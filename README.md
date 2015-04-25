## Informação
|               |                 |
| -                 |:-                 |
| Pacote            | nwk-boilerplate   |
| Descrição         | Node Webkit Boilerplate ajuda a construir aplicações web/desktop velozes, robustos, e adaptáveis ou app. Comece o seu projeto com o conhecimento combinado e esforço de 100s de desenvolvedores, tudo em um prático pacote pequeno.|
| Versão            | 0.0.1 - Alpha     |
| Colaboradores     | [Thiago Ribeiro Filadelfo](thiago.filadelfo@gmail.com) |


## Instalação

    git clone https://github.com/trfiladelfo/nwk-boilerplate.git <nome do projeto>

## Preparação do Ambiente

```sh
$ cd <nome do projeto>
$ npm install
$ gulp init
$ nw webapp
```

## Guia rápido

Comandos mais usado durante o desenvolvimento do Webapp, no terminal use o seguinte comando:
```sh
gulp <option>
```
|     Option          |                   |
| -             |:-                 |
|`build`     | Cria uma distribuição de seu aplicativo para as plataformas (Windows x32, x64; Linux x32, x64 e OSx x32, x64. |
|`watch`     | Comando permite auto-compilação em tempo de desenvolvimento, quando é salvo ou adicionado um arquivo automaticamente será compilado, copiado ou interpretado para a pasta webapp (pasta de compilados).  |
|`compile`     | Semelhante ao watch, porem não executa múltiplas vezes, somente executa quando o usuário digitar o comando, ele limpará os arquivos compilado e compilará todos novamente.  |

## Estrutura do projeto
O projeto foi concebido depois de muitas tentativas para deixar o mais prático possível e o mais flexível para suportar maior parte das "linguagens" e variações de estilo de desenvolvimento.

A estrutura base do projeto contém as seguintes pastas:

<table>
   <thead>
      <tr>
         <th align="left"></th>
         <th align="left"></th>
         <th align="left"></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>src</code></td>
         <td>
            <p>
               Pasta que contém o código fonte da aplicação webapp, com o comando compile ou watch são feitos os procedimentos e gerado os arquivos na pasta webapp.
            </p>
            <p>
            <table border="0">
               <tbody>
                  <tr>
                     <td align="left"><code>main</code></td>
                     <td align="left">
                        <p>Pasta que contém os imagens e códigos para serem compilados</p>
                        <p>
                        <table border="0">
                           <tbody>
                              <tr>
                                 <td align="left"><code>resources</code></td>
                                 <td align="left">
                                    <p>Pasta que contém as fontes, as imagens e  os icones utilizados pela aplicação</p>
                                    <p>
                                    <table border="0">
                                       <tbody>
                                          <tr>
                                             <td align="left"><code>fonts</code></td>
                                             <td align="left">
                                                <p>Fontes utilizadas pelo sistema</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>images</code></td>
                                             <td align="left">
                                                <p>Imagens (gif,jpg,jpeg,png) e icones (ico,icns)</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    </p>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left"><code>scripts</code></td>
                                 <td align="left">
                                    <p>Arquivos scripts para auxiliar a execução da aplicação</p>
                                    <p>
                                    <table border="0">
                                       <tbody>
                                          <tr>
                                             <td align="left"><code>coffeescript</code></td>
                                             <td align="left">
                                                <p>É uma pequena linguagem que compila em JavaScript</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>javascript</code></td>
                                             <td align="left">
                                                <p>Javascript nativo</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    </p>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left"><code>styles</code></td>
                                 <td align="left">
                                    <p>Pasta que contém as folhas de estido da aplicação</p>
                                    <p>
                                    <table border="0">
                                       <tbody>
                                          <tr>
                                             <td align="left"><code>css</code></td>
                                             <td align="left">
                                                <p>CSS nativo</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>less</code></td>
                                             <td align="left">
                                                <p>Um pré-processador de CSS, o que significa que estende a linguagem CSS, adicionando funcionalidades que permitem variáveis, mixins, funções e muitas outras técnicas que você faz no CSS, que é mais fácil de manter.</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>sass</code></td>
                                             <td align="left">
                                                <p>Outro pré-processador de CSS com sintaxe mais avançada, atualmente é o mais utilizado para o desenvolvimento de aplicações web.</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>scss</code></td>
                                             <td align="left">
                                                <p>Outro pré-processador de CSS.</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    </p>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left"><code>templates</code></td>
                                 <td align="left">
                                    <p>Pasta que contém as páginas web da aplicação desktop.</p>
                                    <p>
                                    <table border="0">
                                       <tbody>
                                          <tr>
                                             <td align="left"><code>html</code></td>
                                             <td align="left">
                                                <p>HTML nativo</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left"><code>jade</code></td>
                                             <td align="left">
                                                <p>Permite trabalha com HTML sem necessidade de tags e permite reutilizar páginas.</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    </p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        </p>
                     </td>
                  </tr>
                  <tr>
                     <td align="left"><code>test</code></td>
                     <td align="left">Pasta destinado para testes no projeto.<b>Ainda não funciona !!!</b></td>
                  </tr>
               </tbody>
            </table>
            </p>
         </td>
      </tr>
      <tr>
         <td><code>webapp</code></td>
         <td>
            <p>
               Pasta que receberá os arquivos compilados para depois empacotar em um arquivo executável conforme as plataformas.
            </p>
            <p>
            <table border="0">
               <tbody>
                  <tr>
                     <td align="left"><code>package.json</code></td>
                     <td align="left">Responsável pela configuração do webapp e de armazenar todas as dependência dos plugins do website (bootstrap, foundation, jquery, angular, express e etc).</td>
                  </tr>
               </tbody>
            </table>
            </p>
         </td>
      </tr>
      <tr>
         <td><code>gulpfile.js</code></td>
         <td align="left">Utilizado pelo Gulp para as instruções das tarefas, por exemplo: compile, watch, build, init e etc.</td>
      </tr>
      <tr>
         <td><code>package.json</code></td>
         <td align="left">Responsável pelas descrições dos plugins utilizados do Gulp</td>
      </tr>
   </tbody>
</table>


## Suporte de linguagem
<table>
    <thead>
      <tr>
         <th align="left"></th>
         <th align="left"></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td align="left"><code>0.0.1</code></td>
         <td align="left">
            <table border="0">
               <tbody>
                  <tr>
                     <td align="left"><code>scripts</code></td>
                     <td align="left">
                        <ul style="list-style-type:none"><li>CoffeeScript</li><li>JavaScript</li></ul>
                     </td>
                  </tr>
                  <tr>
                     <td align="left"><code>styles</code></td>
                     <td align="left">
                        <ul style="list-style-type:none"><li>CSS</li><li>LESS</li><li>SASS</li><li>SCSS</li></ul>
                     </td>
                  </tr>
                  <tr>
                     <td align="left"><code>templates</code></td>
                     <td align="left">
                        <ul style="list-style-type:none"><li>HTML/HTM</li><li>JADE</li></ul>
                     </td>
                  </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Thiago Ribeiro Filadelfo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.