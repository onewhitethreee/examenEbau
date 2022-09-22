import os

def main():
    for root, dirs, files in os.walk('CASTILLA LA MANCHA/asignatura/'):
        #print(files)
        for filess in files:
            with open('CASTILLA LA MANCHA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'CASTILLA LA MANCHA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE CASTILLA LA MANCHA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'CASTILLA LA MANCHA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE CASTILLA LA MANCHA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-CASTILLA LA MANCHA
                    title: examen ebau de CASTILLA LA MANCHA
                    slug: /CASTILLA LA MANCHA/
                    description: TODAS EXAMENES DE EBAU DE CASTILLA LA MANCHA
                    keywords:
                    - CASTILLA LA MANCHA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()