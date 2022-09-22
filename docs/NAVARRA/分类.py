import os

def main():
    for root, dirs, files in os.walk('NAVARRA/asignatura/'):
        #print(files)
        for filess in files:
            with open('NAVARRA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'NAVARRA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE NAVARRA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'NAVARRA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE NAVARRA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-NAVARRA
                    title: examen ebau de NAVARRA
                    slug: /NAVARRA/
                    description: TODAS EXAMENES DE EBAU DE NAVARRA
                    keywords:
                    - NAVARRA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()