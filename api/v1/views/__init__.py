#!/usr/bin/python3
"""API blueprint for ClearMySpace Project"""
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')

# import all relavant routes defined within api.v1.views
from api.v1.views.status import *