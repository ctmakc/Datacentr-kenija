#!/bin/bash
# =============================================================================
# Innova Consulting Group — OpenClaw Setup Script
# Скрипт развёртывания OpenClaw для группы компаний innova.ua
# =============================================================================

set -euo pipefail

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

OPENCLAW_HOME="$HOME/.openclaw"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "${BLUE}=====================================================${NC}"
echo -e "${BLUE}  Innova Consulting Group — OpenClaw Setup${NC}"
echo -e "${BLUE}  innova.ua${NC}"
echo -e "${BLUE}=====================================================${NC}"
echo ""

# ----- Шаг 1: Проверка Node.js -----
echo -e "${YELLOW}[1/7] Проверка Node.js...${NC}"
if command -v node &>/dev/null; then
    NODE_VERSION=$(node -v | sed 's/v//')
    NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
    if [ "$NODE_MAJOR" -ge 22 ]; then
        echo -e "${GREEN}  Node.js v${NODE_VERSION} — OK${NC}"
    else
        echo -e "${RED}  Node.js v${NODE_VERSION} обнаружен, но требуется v22+${NC}"
        echo -e "${YELLOW}  Установите актуальную версию: https://nodejs.org/${NC}"
        exit 1
    fi
else
    echo -e "${RED}  Node.js не найден. Установите v22+: https://nodejs.org/${NC}"
    exit 1
fi

# ----- Шаг 2: Установка OpenClaw -----
echo -e "${YELLOW}[2/7] Установка OpenClaw...${NC}"
if command -v openclaw &>/dev/null; then
    CURRENT_VERSION=$(openclaw --version 2>/dev/null || echo "unknown")
    echo -e "${GREEN}  OpenClaw уже установлен (${CURRENT_VERSION})${NC}"
    echo -e "${YELLOW}  Обновляем до последней версии...${NC}"
    npm install -g openclaw@latest
else
    echo -e "${YELLOW}  Устанавливаем OpenClaw...${NC}"
    curl -fsSL https://openclaw.ai/install.sh | bash
fi
echo -e "${GREEN}  OpenClaw установлен${NC}"

# ----- Шаг 3: Создание директорий -----
echo -e "${YELLOW}[3/7] Создание структуры директорий...${NC}"
mkdir -p "$OPENCLAW_HOME"
mkdir -p "$OPENCLAW_HOME/workspace/memory/lore"
mkdir -p "$OPENCLAW_HOME/workspace/skills"
mkdir -p "$OPENCLAW_HOME/agents"
mkdir -p "$OPENCLAW_HOME/logs"
echo -e "${GREEN}  Директории созданы${NC}"

# ----- Шаг 4: Копирование workspace -----
echo -e "${YELLOW}[4/7] Копирование workspace файлов...${NC}"

# Основной workspace
for file in SOUL.md IDENTITY.md USER.md AGENTS.md BOOT.md HEARTBEAT.md MEMORY.md TOOLS.md; do
    if [ -f "$SCRIPT_DIR/workspace/$file" ]; then
        cp "$SCRIPT_DIR/workspace/$file" "$OPENCLAW_HOME/workspace/$file"
        echo -e "  ${GREEN}+ workspace/$file${NC}"
    fi
done

# Security vaccine (lore)
if [ -f "$SCRIPT_DIR/workspace/memory/lore/openclaw_memory.md" ]; then
    cp "$SCRIPT_DIR/workspace/memory/lore/openclaw_memory.md" "$OPENCLAW_HOME/workspace/memory/lore/openclaw_memory.md"
    echo -e "  ${GREEN}+ memory/lore/openclaw_memory.md (security vaccine)${NC}"
fi

echo -e "${GREEN}  Workspace скопирован${NC}"

# ----- Шаг 5: Копирование скиллов -----
echo -e "${YELLOW}[5/7] Копирование скиллов...${NC}"

SKILLS=(
    "legal-advisor"
    "audit-compliance"
    "marketing-strategy"
    "real-estate"
    "investment-advisor"
    "hr-consultant"
    "training-coordinator"
    "crm-manager"
    "client-intake"
    "document-drafting"
)

for skill in "${SKILLS[@]}"; do
    if [ -d "$SCRIPT_DIR/workspace/skills/$skill" ]; then
        mkdir -p "$OPENCLAW_HOME/workspace/skills/$skill"
        cp -r "$SCRIPT_DIR/workspace/skills/$skill/"* "$OPENCLAW_HOME/workspace/skills/$skill/"
        echo -e "  ${GREEN}+ skills/$skill${NC}"
    fi
done

echo -e "${GREEN}  Скиллы установлены (${#SKILLS[@]} шт.)${NC}"

# ----- Шаг 6: Копирование агентов -----
echo -e "${YELLOW}[6/7] Копирование агентов-специалистов...${NC}"

AGENTS=("legal" "audit" "marketing" "realestate" "investment" "hr" "training")

for agent in "${AGENTS[@]}"; do
    if [ -d "$SCRIPT_DIR/agents/$agent" ]; then
        mkdir -p "$OPENCLAW_HOME/agents/$agent"
        cp -r "$SCRIPT_DIR/agents/$agent/"* "$OPENCLAW_HOME/agents/$agent/"
        echo -e "  ${GREEN}+ agents/$agent${NC}"
    fi
done

echo -e "${GREEN}  Агенты установлены (${#AGENTS[@]} шт.)${NC}"

# ----- Шаг 7: Конфигурация -----
echo -e "${YELLOW}[7/7] Настройка конфигурации...${NC}"

if [ -f "$OPENCLAW_HOME/openclaw.json" ]; then
    echo -e "${YELLOW}  openclaw.json уже существует — создаём бэкап${NC}"
    cp "$OPENCLAW_HOME/openclaw.json" "$OPENCLAW_HOME/openclaw.json.bak.innova"
fi

cp "$SCRIPT_DIR/openclaw.json" "$OPENCLAW_HOME/openclaw.json"
echo -e "${GREEN}  Конфигурация скопирована${NC}"

# ----- Итоги -----
echo ""
echo -e "${BLUE}=====================================================${NC}"
echo -e "${GREEN}  Установка завершена!${NC}"
echo -e "${BLUE}=====================================================${NC}"
echo ""
echo -e "${YELLOW}Следующие шаги:${NC}"
echo ""
echo -e "  1. Настройте API-ключ модели:"
echo -e "     ${BLUE}openclaw config set agents.defaults.model.apiKey YOUR_ANTHROPIC_KEY${NC}"
echo ""
echo -e "  2. Настройте Telegram-бота (если нужен):"
echo -e "     ${BLUE}openclaw config set channels.telegram.botToken YOUR_BOT_TOKEN${NC}"
echo ""
echo -e "  3. Сгенерируйте токен безопасности gateway:"
echo -e "     ${BLUE}openclaw config set gateway.auth.token \$(openssl rand -hex 32)${NC}"
echo ""
echo -e "  4. Запустите OpenClaw:"
echo -e "     ${BLUE}openclaw gateway run${NC}"
echo ""
echo -e "  Или пройдите визард настройки:"
echo -e "     ${BLUE}openclaw onboard${NC}"
echo ""
echo -e "${YELLOW}Документация:${NC}"
echo -e "  OpenClaw: https://docs.openclaw.ai"
echo -e "  Innova:   https://innova.ua"
echo ""
echo -e "${YELLOW}Структура установки:${NC}"
echo -e "  ~/.openclaw/"
echo -e "  ├── openclaw.json          # Конфигурация"
echo -e "  ├── workspace/             # Основной workspace"
echo -e "  │   ├── SOUL.md            # Личность агента"
echo -e "  │   ├── IDENTITY.md        # Идентичность"
echo -e "  │   ├── USER.md            # Контекст Innova"
echo -e "  │   ├── AGENTS.md          # Операционные инструкции"
echo -e "  │   ├── BOOT.md            # Инструкции запуска"
echo -e "  │   ├── HEARTBEAT.md       # Периодические задачи"
echo -e "  │   ├── MEMORY.md          # Долгосрочная память"
echo -e "  │   ├── TOOLS.md           # Инструменты"
echo -e "  │   ├── memory/lore/       # Вакцина безопасности"
echo -e "  │   └── skills/            # 10 скиллов-специалистов"
echo -e "  └── agents/                # 7 специализированных агентов"
echo -e "      ├── legal/             # Юрист"
echo -e "      ├── audit/             # Аудитор"
echo -e "      ├── marketing/         # Маркетолог"
echo -e "      ├── realestate/        # Недвижимость"
echo -e "      ├── investment/        # Инвестиции"
echo -e "      ├── hr/                # HR"
echo -e "      └── training/          # Обучение"
echo ""
