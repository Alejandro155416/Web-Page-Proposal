# 📋 Guía de Colaboración - Web Page Proposal

## Introducción

Este documento contiene todas las instrucciones para clonar el proyecto, hacer cambios y guardarlos correctamente en GitHub.

---

## 1. Clonar el Proyecto

Ejecuta este comando en tu terminal para descargar el proyecto:

```bash
git clone https://github.com/Alejandro155416/Web-Page-Proposal.git
```

Luego entra a la carpeta:

```bash
cd Web-Page-Proposal
```

---

## 2. Crear Tu Rama Personal

Cada integrante debe trabajar en su propia rama. Ejecuta:

```bash
git checkout -b tu-nombre-rama
```

### Ejemplos de nombres de ramas:

```bash
git checkout -b juan-vista
git checkout -b maria-controlador
git checkout -b pedro-modelo
```

---

## 3. Hacer Cambios en los Archivos

- Abre los archivos con tu editor favorito (VS Code) y haz los cambios que necesites.
- No modifiques archivos de otros integrantes sin coordinar.

---

## 4. Guardar Cambios Localmente

Una vez hayas realizado cambios, guárdalos con Git:

### Paso 1: Ver el estado de cambios

```bash
git status
```

### Paso 2: Agregar todos los cambios

```bash
git add .
```

### Paso 3: Crear un commit con descripción

```bash
git commit -m "Descripción del cambio realizado"
```

**Ejemplo:**

```bash
git commit -m "Agregar navbar en la vista principal"
```

---

## 5. Subir Cambios a GitHub

Sube tu rama al repositorio:

```bash
git push origin tu-nombre-rama
```

---

## 6. Crear Pull Request en GitHub

1. Ve a: https://github.com/Alejandro155416/Web-Page-Proposal
2. Verás un botón **"Compare & pull request"** - haz clic en él
3. Agrega una descripción clara de tus cambios
4. Haz clic en **"Create pull request"**
5. Espera a que sea revisado y aprobado
6. Una vez aprobado, tu código se fusiona automáticamente

---

## 7. Obtener Cambios de Otros Integrantes

Para descargar cambios que otros han subido:

```bash
git pull origin main
```

---

## 8. Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `git branch` | Ver todas tus ramas locales |
| `git status` | Ver archivos modificados |
| `git log` | Ver historial de commits |
| `git diff` | Ver cambios sin guardar |
| `git checkout main` | Cambiar a rama main |
| `git reset HEAD~1` | Deshacer último commit |

---

## ⚠️ Notas Importantes

- **NO** hagas push directamente a main - siempre usa una rama personal
- Haz commits frecuentes con mensajes descriptivos
- Actualiza tu rama con: `git pull origin main` antes de terminar
- Si hay conflictos, coordina con el equipo antes de hacer merge

---

## Flujo Completo Resumido

1. **Clonar:** `git clone https://github.com/Alejandro155416/Web-Page-Proposal.git`
2. **Entrar:** `cd Web-Page-Proposal`
3. **Nueva rama:** `git checkout -b tu-nombre`
4. **Editar** archivos en VS Code
5. **Guardar cambios:**
   ```bash
   git add .
   git commit -m "Tu mensaje"
   ```
6. **Subir:** `git push origin tu-nombre`
7. **Pull Request** en GitHub
8. **Esperar aprobación** y fusión

---

**Creado:** 9 de julio de 2026 | **Proyecto:** Web Page Proposal
