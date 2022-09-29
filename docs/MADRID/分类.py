import os

def main():
    for root, dirs, files in os.walk('docs/MADRID/asignatura/'):
        #print(files)
        for filess in files:
            with open('docs/MADRID/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'MADRID/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE MADRID'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'MADRID' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE MADRID'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-MADRID
                    title: examen ebau de MADRID
                    slug: /MADRID/
                    description: TODAS EXAMENES DE EBAU DE MADRID
                    keywords:
                    - MADRID
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()