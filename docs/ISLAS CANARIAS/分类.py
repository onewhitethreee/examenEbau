import os

def main():
    for root, dirs, files in os.walk('ISLAS CANARIAS/asignatura/'):
        #print(files)
        for filess in files:
            with open('ISLAS CANARIAS/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'ISLAS CANARIAS/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE ISLAS CANARIAS'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'ISLAS CANARIAS' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE ISLAS CANARIAS'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-ISLAS CANARIAS
                    title: examen ebau de ISLAS CANARIAS
                    slug: /ISLAS CANARIAS/
                    description: TODAS EXAMENES DE EBAU DE ISLAS CANARIAS
                    keywords:
                    - ISLAS CANARIAS
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()