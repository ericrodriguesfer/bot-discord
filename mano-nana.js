import pkg from 'discord.js';
import 'dotenv/config'

const { Client } = pkg;
const client = new Client({ intents: [8] });

const channelId = process.env.CHANNEL_ID;
const intervaloDeHoras = 1;

client.once('ready', () => {
    console.log(`Bot está conectado como ${client.user.tag}`);
    enviarMensagemDiaria();
    setInterval(enviarMensagemDiaria, intervaloDeHoras * 60 * 60 * 1000);
});

const mensagens = [
  'dentro da hilux, ela movimenta no beat do tuts tuts',
  'vavazim?',
  'eu perguntei a Deus do céu, ai. Por que tamanha judiação?',
  'eu amo a Ana Castela',
  'principalmente a ana Castela a maior artista do mundo',
  'vai um mel de abelha?', 
  'nasci e me criei numa casa de taipa',
  'tengo, lengo, tengo, lengo',
  'amo a ana castela e jogar ping pong',
  'no final da tarde eu levo o gado pra beber',
  'eu amo Pedra Branca',
  'eu te amo Marquin',
]

async function enviarMensagemDiaria() {
    const today = new Date();
    const curHr = today.getHours();
    const canal = await client.channels.fetch(channelId);

    console.log(curHr);

    if (curHr < 12) {
      canal.send(`Bom dia grupo, ${mensagens[Math.floor(Math.random() * mensagens.length)]}`);
    } else if (curHr < 18) {
      canal.send(`Boa tarde comunidade, ${mensagens[Math.floor(Math.random() * mensagens.length)]}`);
    } else {
      canal.send(`Boa noite PTFERs, ${mensagens[Math.floor(Math.random() * mensagens.length)]}`);
    }
}

const token = process.env.BOT_TOKEN;
client.login(token);
