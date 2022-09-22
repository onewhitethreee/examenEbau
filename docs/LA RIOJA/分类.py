import os

def main():
    for root, dirs, files in os.walk('LA RIOJA/asignatura/'):
        #print(files)
        for filess in files:
            with open('LA RIOJA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'LA RIOJA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE LA RIOJA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'LA RIOJA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE LA RIOJA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-LA RIOJA
                    title: examen ebau de LA RIOJA
                    slug: /LA RIOJA/
                    description: TODAS EXAMENES DE EBAU DE LA RIOJA
                    keywords:
                    - LA RIOJA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()