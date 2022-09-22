import os

def main():
    for root, dirs, files in os.walk('ASTURIAS/asignatura/'):
        #print(files)
        for filess in files:
            with open('ASTURIAS/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'ASTURIAS/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE ASTURIAS'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'ASTURIAS' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE ASTURIAS'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-ASTURIAS
                    title: examen ebau de ASTURIAS
                    slug: /ASTURIAS/
                    description: TODAS EXAMENES DE EBAU DE ASTURIAS
                    keywords:
                    - ASTURIAS
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()