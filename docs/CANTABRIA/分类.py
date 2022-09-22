import os

def main():
    for root, dirs, files in os.walk('CANTABRIA/asignatura/'):
        #print(files)
        for filess in files:
            with open('CANTABRIA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'CANTABRIA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE CANTABRIA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'CANTABRIA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE CANTABRIA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-CANTABRIA
                    title: examen ebau de CANTABRIA
                    slug: /CANTABRIA/
                    description: TODAS EXAMENES DE EBAU DE CANTABRIA
                    keywords:
                    - CANTABRIA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()