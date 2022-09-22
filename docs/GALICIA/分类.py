import os

def main():
    for root, dirs, files in os.walk('GALICIA/asignatura/'):
        #print(files)
        for filess in files:
            with open('GALICIA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'GALICIA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE GALICIA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'GALICIA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE GALICIA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-GALICIA
                    title: examen ebau de GALICIA
                    slug: /GALICIA/
                    description: TODAS EXAMENES DE EBAU DE GALICIA
                    keywords:
                    - GALICIA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()