import os

def main():
    for root, dirs, files in os.walk('EXTREMADURA/asignatura/'):
        #print(files)
        for filess in files:
            with open('EXTREMADURA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'EXTREMADURA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE EXTREMADURA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'EXTREMADURA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE EXTREMADURA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-EXTREMADURA
                    title: examen ebau de EXTREMADURA
                    slug: /EXTREMADURA/
                    description: TODAS EXAMENES DE EBAU DE EXTREMADURA
                    keywords:
                    - EXTREMADURA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()