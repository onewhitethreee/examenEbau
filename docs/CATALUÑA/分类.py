import os

def main():
    for root, dirs, files in os.walk('CATALUÑA/asignatura/'):
        #print(files)
        for filess in files:
            with open('CATALUÑA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'CATALUÑA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE CATALUÑA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'CATALUÑA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE CATALUÑA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-CATALUÑA
                    title: examen ebau de CATALUÑA
                    slug: /CATALUÑA/
                    description: TODAS EXAMENES DE EBAU DE CATALUÑA
                    keywords:
                    - CATALUÑA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()