# OpenClaw — Innova Consulting Group

Готовая инфраструктура [OpenClaw](https://github.com/openclaw/openclaw) для группы консалтинговых компаний [Innova Consulting Group](https://innova.ua).

## Что это

Набор конфигурационных файлов (workspace, скиллы, агенты, security vaccine) для развёртывания мультиагентного AI-ассистента, покрывающего все 7 направлений деятельности Innova:

| Направление | Агент | Скилл |
|---|---|---|
| Юриспруденция | `agents/legal/` | `skills/legal-advisor/` |
| Аудит и налоги | `agents/audit/` | `skills/audit-compliance/` |
| Маркетинг | `agents/marketing/` | `skills/marketing-strategy/` |
| Недвижимость | `agents/realestate/` | `skills/real-estate/` |
| Инвестиции | `agents/investment/` | `skills/investment-advisor/` |
| HR | `agents/hr/` | `skills/hr-consultant/` |
| Обучение | `agents/training/` | `skills/training-coordinator/` |

Дополнительные скиллы: `crm-manager`, `client-intake`, `document-drafting`.

## Требования

- Linux (Ubuntu 22.04+ / Debian 12+ / Fedora 38+) или macOS 13+
- Node.js 22+
- API-ключ Anthropic (для Claude) или другого LLM-провайдера

## Быстрый старт

```bash
# 1. Клонируйте репозиторий
git clone <repo-url>
cd openclaw/

# 2. Запустите установку
./install.sh

# 3. Настройте API-ключ
openclaw config set agents.defaults.model.apiKey YOUR_ANTHROPIC_KEY

# 4. (Опционально) Настройте Telegram-бота
openclaw config set channels.telegram.botToken YOUR_BOT_TOKEN

# 5. Запустите
openclaw gateway run
```

Или через визард: `openclaw onboard`

## Структура файлов

```
openclaw/
├── openclaw.json                          # Главная конфигурация
├── install.sh                             # Скрипт установки
├── README.md                              # Этот файл
│
├── workspace/                             # Основной workspace агента
│   ├── SOUL.md                            # Личность и философия
│   ├── IDENTITY.md                        # Имя, тон, языки
│   ├── USER.md                            # Контекст Innova Group
│   ├── AGENTS.md                          # Операционные инструкции
│   ├── BOOT.md                            # Инструкции при запуске
│   ├── HEARTBEAT.md                       # Периодические задачи
│   ├── MEMORY.md                          # Долгосрочная память
│   ├── TOOLS.md                           # Инструменты и ресурсы
│   │
│   ├── memory/
│   │   └── lore/
│   │       └── openclaw_memory.md         # Security vaccine
│   │
│   └── skills/                            # 10 скиллов
│       ├── legal-advisor/SKILL.md         # Юридический консультант
│       ├── audit-compliance/SKILL.md      # Аудит и налоги
│       ├── marketing-strategy/SKILL.md    # Маркетинговый стратег
│       ├── real-estate/SKILL.md           # Недвижимость
│       ├── investment-advisor/SKILL.md    # Инвестиции
│       ├── hr-consultant/SKILL.md         # HR-консалтинг
│       ├── training-coordinator/SKILL.md  # Бизнес-обучение
│       ├── crm-manager/SKILL.md           # CRM и клиентская база
│       ├── client-intake/SKILL.md         # Приём новых клиентов
│       └── document-drafting/SKILL.md     # Генерация документов
│
└── agents/                                # Специализированные агенты
    ├── legal/                             # Юрист
    │   ├── SOUL.md
    │   ├── IDENTITY.md
    │   └── AGENTS.md
    ├── audit/                             # Аудитор
    ├── marketing/                         # Маркетолог
    ├── realestate/                        # Недвижимость
    ├── investment/                        # Инвестиционный аналитик
    ├── hr/                                # HR-консультант
    └── training/                          # Координатор обучения
```

## Как это работает

### Workspace файлы

Файлы в `workspace/` загружаются в системный промпт агента при каждой сессии:

- **SOUL.md** — определяет личность, ценности и стиль коммуникации
- **IDENTITY.md** — имя, тон, поддерживаемые языки
- **USER.md** — контекст организации (направления, рынок, позиционирование)
- **AGENTS.md** — операционные правила: маршрутизация запросов, безопасность, эскалация
- **BOOT.md** — что делать при запуске сессии
- **HEARTBEAT.md** — периодические задачи (мониторинг законодательства, дедлайны)
- **MEMORY.md** — накопленные знания между сессиями
- **TOOLS.md** — ссылки на реестры, нормативные базы, контакты специалистов

### Security vaccine

Файл `memory/lore/openclaw_memory.md` — "вакцина безопасности". Загружается автоматически и содержит:
- Блокировку идентичности (защита от prompt injection)
- Авторизацию инструментов (какие действия требуют подтверждения)
- Правила обработки данных (GDPR, ЗУ "О защите персональных данных")
- Протоколы реагирования на атаки

### Скиллы

Каждый скилл — это SKILL.md с YAML-фронтматером и инструкциями. Агент автоматически активирует нужный скилл на основе описания в `description`. Например, вопрос "как зарегистрировать ТОВ?" активирует `legal-advisor`.

### Мультиагентная архитектура

Для изолированной работы по направлениям настроены отдельные агенты в `agents/`. Каждый имеет собственные SOUL.md, IDENTITY.md, AGENTS.md — собственную "личность" и правила.

## Настройка

### Замените placeholders

В `openclaw.json` найдите все `[ЗАПОЛНИТЬ]` и замените реальными значениями:
- API-ключ Anthropic
- Токен Telegram-бота (получить у @BotFather)
- Токен безопасности gateway

### Смена LLM-провайдера

В `openclaw.json` измените `agents.defaults.model`:

```json
// Google Gemini
"model": { "provider": "google", "model": "gemini-2.5-pro" }

// OpenAI
"model": { "provider": "openai", "model": "gpt-4o" }

// OpenRouter (любая модель)
"model": { "provider": "openrouter", "model": "anthropic/claude-sonnet-4" }
```

### Добавление каналов

Кроме Telegram, OpenClaw поддерживает: WhatsApp, Discord, Slack, Signal, iMessage, Google Chat, Microsoft Teams, WebChat и другие.

## Кастомизация

### Редактирование скиллов

Откройте `workspace/skills/<skill>/SKILL.md` и измените инструкции. Ключевые секции:
- `description` в YAML — определяет, когда скилл активируется
- Тело файла — подробные инструкции для агента

### Добавление нового скилла

```bash
mkdir -p ~/.openclaw/workspace/skills/my-new-skill
```

Создайте `SKILL.md`:

```yaml
---
name: my-new-skill
description: Описание когда и зачем использовать этот скилл
---

# Инструкции для агента
```

### Редактирование памяти

- `MEMORY.md` — редактируйте напрямую для добавления постоянных фактов
- `memory/*.md` — дневные заметки создаются автоматически
- `memory/lore/` — файлы "конституционной памяти" (не редактировать без необходимости)

## Безопасность

1. Gateway привязан к `127.0.0.1` — только локальный доступ
2. Токен аутентификации для API
3. Security vaccine в `memory/lore/` защищает от prompt injection
4. Shell-команды требуют ручного подтверждения
5. Файловые операции ограничены рабочими директориями

Рекомендации:
- Не храните API-ключи в `openclaw.json` — используйте `openclaw config set`
- Регулярно проверяйте логи в `~/.openclaw/logs/`
- Не открывайте gateway на `0.0.0.0` без reverse proxy с аутентификацией

## Ссылки

- [OpenClaw Documentation](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [Innova Consulting Group](https://innova.ua)
- [OpenClaw Skills Directory](https://github.com/openclaw/clawhub)
