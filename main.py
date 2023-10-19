# Project Jordyn by Alex Arbuckle #


# import <
from os import path
from random import choice
from json import load, dump
from discord import Intents
from datetime import datetime as dt
from lxRbckl import jsonDump, jsonLoad
from discord.ext import commands, tasks

# >


# token <
# global <
discordToken = ''

gChannel = 1061387142082863104
gPath = path.realpath(__file__).split('/')
gDirectory = '/'.join(gPath[:(len(gPath) - 1)])
ja = commands.Bot(command_prefix = '', intents = Intents.all())

# >


@ja.command(aliases = jsonLoad(pFile = f'{gDirectory}/setting.json')['alias']['choose'])
async def chooseCommand(ctx, *args):
    '''  '''

    # decide choice <
    # output choice <
    decision = choice(' '.join(args).split(',')).strip()
    await ctx.send(f':man_mage: **{decision}**', delete_after = 540)

    # >


@ja.command(aliases = jsonLoad(pFile = f'{gDirectory}/setting.json')['alias']['conch'])
async def conchCommand(ctx, arg):
    '''  '''

    # decide choice <
    # output choice <
    decision = choice(jsonLoad(pFile = f'{gDirectory}/setting.json')['conch'])
    await ctx.send(f':crystal_ball: **{decision}**', delete_after = 540)

    # >


@tasks.loop(hours = 1)
async def discussionFunction():
    '''  '''

    date = dt.now().strftime('%V')
    data = jsonLoad(pFile = f'{gDirectory}/data.json')

    # if (new week) <
    if (date != data['date']):

        data['date'] = date
        jsonDump(pData = data, pFile = f'{gDirectory}/data.json')

        await ja.get_channel(gChannel).send(choice(data['discussion']))

    # >


@ja.event
async def on_ready(): discussionFunction.start()


# main <
if (__name__ == '__main__'): ja.run(discordToken)

# >
