import os

def main():
    for root, dirs, files in os.walk('COMUNIDAD VALENCIANA/asignatura/'):
        #print(files)
        for filess in files:
            with open('COMUNIDAD VALENCIANA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'COMUNIDAD VALENCIANA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE COMUNIDAD VALENCIANA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'COMUNIDAD VALENCIANA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE COMUNIDAD VALENCIANA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-COMUNIDAD VALENCIANA
                    title: examen ebau de COMUNIDAD VALENCIANA
                    slug: /COMUNIDAD VALENCIANA/
                    description: TODAS EXAMENES DE EBAU DE COMUNIDAD VALENCIANA
                    keywords:
                    - COMUNIDAD VALENCIANA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()